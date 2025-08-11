import { Html, Tailwind } from "@react-email/components";

type EmailTemplateProps = {
	name: string;
	email: string;
	message: string;
};

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
	return (
		<Html>
			<Tailwind>
				<div className="p-6 bg-white">
					<h1 className="text-4xl font-bold">Contact Form Submission</h1>
					<p className="mt-4 text-lg">You have received a new contact form submission.</p>
					<div className="mt-6">
						<p className="text-xl font-semibold">Details:</p>
						<ul className="list-disc pl-6 mt-2">
							<li className="text-lg">
								<span className="font-semibold">Name: </span>
								{name}
							</li>
							<li className="text-lg">
								<span className="font-semibold">Email: </span>
								{email}
							</li>
						</ul>
						<p className="text-xl font-semibold">Message:</p>
						<p className="text-lg whitespace-pre-wrap">{message}</p>
						<br />
						<p className="mt-4 text-sm text-gray-600">
							Get in touch with them!
						</p>
					</div>
				</div>
			</Tailwind>
		</Html>
	);
}
