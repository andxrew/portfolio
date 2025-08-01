import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import clsx from "clsx"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Container } from "@/components/Container"
import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons"

import image1 from "@/images/photos/sidewalk.jpg"
import image2 from "@/images/photos/diffRoad.jpg"
import image3 from "@/images/photos/road.jpg"
import image4 from "@/images/photos/perspective.jpg"
import image5 from "@/images/photos/mountain.jpg"

import logoGUH from "@/images/logos/guh.png"
import logoMMU from "@/images/logos/mmu.svg"
import logoBarclays from "@/images/logos/BCS.svg"
import logoGoogle from "@/images/logos/google.svg"
import logoTesco from "@/images/logos/tesco.svg"

import { generateRssFeed } from "@/lib/generateRssFeed"
import { getAllArticles } from "@/lib/getAllArticles"
import { formatDate } from "@/lib/formatDate"

function MailIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
			/>
			<path
				d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
				className="stroke-zinc-400 dark:stroke-zinc-500"
			/>
		</svg>
	)
}

function BriefcaseIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
			/>
			<path
				d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
				className="stroke-zinc-400 dark:stroke-zinc-500"
			/>
		</svg>
	)
}

function ArrowDownIcon(props) {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function Article({ article }) {
	return (
		<Card as="article">
			<Card.Title href={`/articles/${article.slug}`}>
				{article.title}
			</Card.Title>
			<Card.Eyebrow
				as="time"
				dateTime={article.date}
				decorate
			>
				{formatDate(article.date)}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.Cta>Read article</Card.Cta>
		</Card>
	)
}

function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link
			className="group -m-1 p-1"
			{...props}
		>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	)
}

function Newsletter() {
	return (
		<form
			action="/thank-you"
			className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
		>
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Stay up to date</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				Get notified when I release something new, unsubscribe at any time.
			</p>
			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required
					className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
				/>
				<Button
					type="submit"
					className="ml-4 flex-none"
				>
					Let’s go!
				</Button>
			</div>
		</form>
	)
}

function Resume() {
	let resume = [
		{
			company: "Barclays Bank",
			title: "Graduate Software Engineer",
			logo: logoBarclays, // You can add this logo to your assets
			start: "Aug 2025",
			end: "Present",
		},
		{
			company: "Barclays Bank",
			title: "Technology Developer Intern",
			logo: logoBarclays, // You can add this logo to your assets
			start: "June 2024",
			end: "Sept 2024",
			description:
				"Built machine learning models using Python and SQL to classify internal data changes, supporting informed decision-making with explainability features.",
		},
		{
			company: "Google BGN Hackathon",
			title: "2nd Place – FinTech Web App",
			logo: logoGoogle, // Add logo if available
			start: "Oct 2023",
			description:
				"Created a financial literacy web app to manage transactions and budgets with a smooth UX; placed 2nd out of national student teams.",
		},
		{
			company: "GreatUniHack2023",
			title: "Participant – Sustainability AI App",
			logo: logoGUH, // Add logo if you have it
			start: "Nov 2023",
			description:
				"Built a web/mobile app for code, image, and video generation with integrated tree-planting initiatives to offset user carbon footprints.",
		},
		{
			company: "Tesco PLC",
			title: "Assistant – Petrol Station Ops",
			logo: logoTesco, // Add logo if you have it
			start: "June 2023",
			end: "Sept 2023",
			description:
				"Monitored and maintained petrol station computer systems, identifying opportunities to improve network efficiency and customer service.",
		},
		{
			company: "University Projects",
			title: "Interactive Games, Web & AI Applications",
			logo: logoMMU,
			start: "Sept 2022",
			end: "Summer 2025",
			description:
				"Developed projects including 2D games, OpenAI-based quiz apps, and an AI-powered skin lesion classifier using React Native and TensorFlow.",
		},
		// {
		// 	company: "Freelance Projects",
		// 	title: "Web & Mobile App Developer",
		// 	logo: logoFiv,
		// 	start: "Summer 2023",
		// 	end: {
		// 		label: "Present",
		// 		dateTime: new Date().getFullYear(),
		// 	},
		// },
	]

	return (
		<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 md:text-base">
				<BriefcaseIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Experience</span>
			</h2>
			<ol className="mt-6 space-y-4">
				{resume.map((role, roleIndex) => (
					<li
						key={roleIndex}
						className="flex gap-4"
					>
						<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							<Image
								src={role.logo}
								alt=""
								className="h-7 w-7"
								unoptimized
							/>
						</div>
						<dl className="flex flex-auto justify-between gap-x-2">
							<div className="flex flex-col">
								<dt className="sr-only">Company</dt>
								<dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100 md:text-base">
									{role.company}
								</dd>

								<dt className="sr-only">Role</dt>
								<dd className="text-xs text-zinc-500 dark:text-zinc-400 md:text-base md:font-medium">
									{role.title}
								</dd>

								{role.description && (
									<dd className="mt-0 hidden max-w-md text-xs text-zinc-500 dark:text-zinc-400 md:block md:text-sm">
										{role.description}
									</dd>
								)}
							</div>

							<dd
								className="ml-auto whitespace-nowrap text-xs text-zinc-400 dark:text-zinc-500"
								aria-label={
									role.end
										? `${role.start.label ?? role.start} until ${
												role.end.label ?? role.end
										  }`
										: `${role.start.label ?? role.start}`
								}
							>
								<time dateTime={role.start.dateTime ?? role.start}>
									{role.start.label ?? role.start}
								</time>
								{role.end && (
									<>
										{" "}
										<span aria-hidden="true">—</span>{" "}
										<time dateTime={role.end.dateTime ?? role.end}>
											{role.end.label ?? role.end}
										</time>
									</>
								)}
							</dd>
						</dl>
					</li>
				))}
			</ol>
			{/* <Button
				href=""
				variant="secondary"
				className="group mt-6 w-full"
			>
				<a href="https://www.linkedin.com/in/andrew-sod">Download CV</a>
				<ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
			</Button> */}
		</div>
	)
}

function Photos() {
	let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"]

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={clsx(
							"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
							// rotations[imageIndex % rotations.length]
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>Andrew Sodeinde - Developer, student, and entrepreneur.</title>
				<meta
					name="description"
					content="I’m Andrew, a full-stack developer and entrepreneur based in
          Manchester, UK."
				/>
			</Head>
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						Developer, innovator, and entrepreneur.
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I’m Andrew ( drew for short ), a full-stack developer and
						entrepreneur based in Manchester, UK. I recently graduated with a
						First-Class degree in Computer Science from Manchester Metropolitan
						University and now focus on building modern web and mobile
						applications.
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink
							href="https://github.com/andxrew"
							target="_blank"
							aria-label="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href="https://www.linkedin.com/in/andrew-sod"
							target="_blank"
							aria-label="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</div>
				</div>
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
					{/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
					<div className="space-y-10 lg:pl-16 xl:pl-24">
						<Resume />
					</div>
				</div>
			</Container>
		</>
	)
}

export async function getStaticProps() {
	if (process.env.NODE_ENV === "production") {
		await generateRssFeed()
	}

	return {
		props: {
			articles: (await getAllArticles())
				.slice(0, 4)
				.map(({ component, ...meta }) => meta),
		},
	}
}
