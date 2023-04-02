import Image from "next/image";
import { Fragment } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import clsx from "clsx";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { ButtonLink } from "@/components/button/Button";
import blurCyanImage from "@/images/blur-cyan.png";
import blurIndigoImage from "@/images/blur-indigo.png";
const codeLanguage = "javascript";
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`;

const tabs = [{ name: "Chest", isActive: true }];
const Hero = () => {
	return (
		<div className="w-full">
			<div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]">
				<div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
					<div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
						<div className="relative z-10 md:text-center lg:text-left">
							<div className="relative">
								<h1 className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
									Volume Landmarks for Hypertrophy Training
								</h1>
								<p className="mt-3 text-2xl tracking-tight text-slate-400">
									Visualize all the volume landmarks from the{" "}
									<a
										href="https://rpstrength.com/hypertrophy-training-guide-central-hub/"
										className="text-blue-500"
									>
										Renaissance Periodization Hypertrophy guides.
									</a>
								</p>
								<div className="mt-8 flex space-x-4 md:justify-center lg:justify-start">
									<ButtonLink href="/#muscles">Get started</ButtonLink>
									<ButtonLink
										href="https://github.com/vicentematus/volume-landmarks-rp/"
										variant="secondary"
									>
										View on GitHub
									</ButtonLink>
								</div>
							</div>
						</div>
						<div className="relative lg:static xl:pl-10">
							<div className="flex justify-center z-[90] ">

								<Image
									src={"/img/hero.jpg"}
									alt="man lifting weights"
									className="rounded-2xl mx-auto"
									width={600}
									height={400}
									priority
									layout="intrinsic"
								/>
							</div>

							<div className="relative">


								<div className="absolute -top-64 -right-64">
									<Image
										src={blurCyanImage}
										alt=""
										layout="fixed"
										width={530}
										height={530}
										unoptimized
										priority
									/>
								</div>
								<div className="absolute -bottom-40 -right-44">
									<Image
										src={blurIndigoImage}
										alt=""
										layout="fixed"
										width={567}
										height={567}
										unoptimized
										priority
									/>
								</div>
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
