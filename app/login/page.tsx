"use client";
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authSchema } from "../../lib/schemas";

type FormFields = z.infer<typeof authSchema>;

function Page() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(authSchema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const { email, password } = data;
		const res = await signIn("credentials", { email, password, redirect: false });
		if (res?.error) setError("root", { message: "Invalid credentials." });
		router.push("/");
	};

	return (
		<section className="flex justify-center items-center py-30">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="m-4 flex gap-4 border-1">
					<label>Email</label>
					<input {...register("email")} type="email" placeholder="email" />
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div className="m-4 flex gap-4 border-1">
					<label>Password</label>
					<input {...register("password")} type="password" placeholder="password" />
					{errors.password && <p>{errors.password.message}</p>}
				</div>
				<button className="border-1" disabled={isSubmitting} type="submit">
					{isSubmitting ? "Loading..." : "Submit"}
				</button>
				{errors.root && <p>{errors.root.message}</p>}
			</form>
		</section>
	);
}

export default Page;
