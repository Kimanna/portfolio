import Seo from "../components/Seo";

export default function Test() {
    console.log("🚀 ~ file: Test.js ~ line 4 ~ Test ~ Test")

    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")

    let img = new Image();
    img.src = "sample.png"
    img.onload = function () {
        context.drawImage(img,20,20,100,100)

    }

    return (
        <div>
            <Seo title="TestPage" />
            <h1>test</h1>
            <canvas id="canvas" width={300} height={300}></canvas>
        </div>
    );
}