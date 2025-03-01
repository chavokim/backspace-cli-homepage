import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		const getDescription = () => {
			if (process.env.NEXT_PUBLIC_WEB_MODE === "connectto") {
				return "private class 글또 9기 백엔드인프라 반상회 implements 글또";
			}

			return "글또 반상회 질의응답 사이트";
		};

		const getImage = () => {
			if (process.env.NEXT_PUBLIC_WEB_MODE === "connectto") {
				return "/thumbnail.png";
			}

			return "/thumbnail.png";
		};

		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<meta name={"og:image"} content={getImage()} />
					<meta name="msapplication-TileColor" content="#262626" />
					<meta
						name="msapplication-TileImage"
						content="/ms-icon-144x144.png"
					/>
					<meta name="theme-color" content="#D79921" />
					<meta name="description" content={getDescription()} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
