import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons"
import portraitImage from "@/images/astro.jpg"

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, "flex")}>
			<Link
				href={href}
				className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
			>
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	)
}

function MailIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	)
}

export default function About() {
	return (
		<>
			<Head>
				<title>About - Andrew Sodeinde</title>
				<meta
					name="description"
					content="I’m Andrew Sodeinde. I strive to shape the future."
				/>
			</Head>
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={portraitImage}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							I’m Andrew Sodeinde. I live in Manchester, where I strive to shape
							the future.
						</h1>
						<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
							<p>
								I’ve loved all things tech for as long as I can remember, and
								wrote my first program when I was 11 years old, using a severely
								outdated intel pentium 4 laptop. I was hooked. I’ve been coding
								ever since.
							</p>
							<p>
								I am constantly immersed in the world of technology and software
								development. I thrive on exploring new programming languages,
								frameworks, and tools to expand my skill set. From tackling
								challenging coding problems to diving into the latest industry
								trends, I am passionate about {"continuous learning"}
								and professional growth.
							</p>
							<p>
								I strongly believe in the value of
								{" constant growth"}, and it&#39;s something I strive for in
								everything I do. Technology has always been my passion, and
								I&#39;m driven to continuously push the limits of what&#39;s
								possible.
							</p>
							<p>
								I aspire to be a source of inspiration, empowering others to
								reach their goals as I work towards achieving mine. Together,
								we&#39;ll take steady steps towards growth and success.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							<SocialLink
								href="https://github.com/andxrew"
								target="_blank"
								icon={GitHubIcon}
								className="mt-4"
							>
								Follow on GitHub
							</SocialLink>
							<SocialLink
								href="https://www.linkedin.com/in/andrew-sod"
								target="_blank"
								icon={LinkedInIcon}
								className="mt-4"
							>
								Follow on LinkedIn
							</SocialLink>
							<SocialLink
								href="mailto:andrewsodeinde@gmail.com"
								icon={MailIcon}
								className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
							>
								andrewsodeinde@gmail.com
							</SocialLink>
						</ul>
					</div>
				</div>
			</Container>
		</>
	)
}
