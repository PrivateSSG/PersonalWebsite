import PdfDownloadFun from "./PdfDownloadFun";
import UploadFunc from "./UploadFunc";
const UploadPdfForResult = () => {

    return (
        <>

            <div>
                <div className="flex grow">

                    <PdfDownloadFun bucketId="654f623b816d52fdfc99" gradeName="First Assessment Results" />
                    <UploadFunc bucketId={"654f623b816d52fdfc99"} gradeName={"Upload PDF for First Assessment Results"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f62c88efbe2aa57b3" gradeName={"Second Assessment Results"} />
                    <UploadFunc bucketId={"654f62c88efbe2aa57b3"} gradeName={"Upload  PDF for Second Assessment Results"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f62f3535e41e232a4" gradeName={"Mid-Term Result"} />
                    <UploadFunc bucketId={"654f62f3535e41e232a4"} gradeName={"Upload  PDF for Mid-Term Result"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f6318b65e14eacdcf" gradeName={"Final-Term Result"} />
                    <UploadFunc bucketId={"654f6318b65e14eacdcf"} gradeName={"Upload  PDF for Final-Term Result"} />
                </div>
            </div>

        </>
    );
};

export default UploadPdfForResult;
