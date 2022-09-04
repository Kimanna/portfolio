import Head from "next/head";

interface IProps {
    title: string;
}
export default function Seo(props: IProps) {
    console.log("🚀 ~ file: Seo.js ~ line 4 ~ Seo ~ Seo", props)
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    );
}

