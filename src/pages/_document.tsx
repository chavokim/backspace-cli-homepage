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
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
					<link rel="manifest" href="/site.webmanifest">
					<meta name="msapplication-TileColor" content="#262626" />
					<meta
						name="msapplication-TileImage"
						content="/ms-icon-144x144.png"
					/>
					<meta name="theme-color" content="#D79921" />
					<meta name="title" content="반상회 사이트" />
					<meta name="description" content="반상회 질의응답 사이트" />
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
