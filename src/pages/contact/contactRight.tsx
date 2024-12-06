"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// import { Button } from "../../components/ui/button";
import Button from "../../components/shared/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useToast } from "../../hooks/use-toast"
import { Textarea } from "../../components/ui/textarea";

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	email: z.string().email("Invalid email address.").min(2, {
		message: "Email must be at least 2 characters.",
	}),
	message: z.string().min(10, {
		message: "Message should be at least 10 characters.",
	}),
});

const ContactRight = () => {
	const formRef = useRef<HTMLFormElement | null>(null);
	const { toast } = useToast();
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		if (formRef.current) {
			emailjs
				.sendForm(
					"service_o30209g",
					"template_4nx9e09",
					formRef.current,
					{
						publicKey: "yO29NmoAtZmhkI97z",
					}
				)
				.then(
					() => {
            console.info('SUCCESS');
            toast({
              title: "Email sent.",
              description: `Thanks ${values.username}, I'll be in touch.`,
            });
            form.reset(); //clear the fields after submission
          },
          (error) => {
            toast({
              variant: "destructive",
              title: "Email failed to send.",
              description: `Please contact support if this continues.`,
            });
            console.warn("FAILED...", JSON.stringify(error));
          },
				);
		}
	}

	return (
		<Form {...form}>
			<form
				ref={formRef} //Required by EmailJS
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-10 h-full flex flex-col justify-between pb-10"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Enter your name"
									{...field}
									className="border-[3px] border-black rounded-sm p-4 w-full text-[1.2em] bg-transparent "
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Enter your email"
									{...field}
									className="border-[3px] border-black rounded-sm p-4 w-full text-[1.2em] bg-transparent"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									className="border-[3px] border-black rounded-sm p-4 w-full text-[1.2em] bg-transparent h-[35vh]"
									placeholder="Type your message here."
									id="message"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button text="Connect" type="submit" className="w-full"/>
			</form>
		</Form>
	);
};

export default ContactRight;
