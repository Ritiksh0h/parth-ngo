import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

interface SubPageHeaderProps {
	title: string;
	backHref?: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({
	title,
	backHref = "/",
}) => (
	<div className="bg-gray-50 pt-16">
		<div className="bg-white shadow-sm sticky top-10 z-10">
			<div className="container mx-auto px-4">
				<div className="flex items-center h-16">
					<Link
						href={backHref}
						className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
					>
						<ArrowLeft className="w-5 h-5 mr-2" />
						<Home className="w-6 h-6 text-sky-600 mr-2" />
					</Link>
					<div className="flex items-center ml-4">
						<h1 className="text-xl font-bold text-gray-800">{title}</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default SubPageHeader;