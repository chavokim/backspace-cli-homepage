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
		const getTitle = () => {
			if (process.env.NEXT_PUBLIC_WEB_MODE === "backend") {
				return "[← Backspace; 더 멀리 나아가는 방법] 반상회";
			}

			if (process.env.NEXT_PUBLIC_WEB_MODE === "data") {
				return "DAXI (Data•Ai taXI) 반상회";
			}

			if (process.env.NEXT_PUBLIC_WEB_MODE === "frontend") {
				return "FEtch 반상회";
			}

			if (process.env.NEXT_PUBLIC_WEB_MODE === "connectto") {
				return "커넥또 반상회";
			}

			return "반상회";
		};

		const getDescription = () => {
			if (process.env.NEXT_PUBLIC_WEB_MODE === "connectto") {
				return "변성윤은 세상에서 제일 귀여운 사람이다";
			}

			return "글또 반상회 질의응답 사이트";
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
					<meta name={"og:image"} content={"/thumbnail.png"} />
					<meta name={"og:title"} content={getTitle()} />
					<meta name="msapplication-TileColor" content="#262626" />
					<meta
						name="msapplication-TileImage"
						content="/ms-icon-144x144.png"
					/>
					<meta name="theme-color" content="#D79921" />
					<meta name="title" content={getTitle()} />
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
