import PdfDownloadFun from "./PdfDownloadFun";
import UploadFunc from "./UploadFunc";
const UploadpdfForSyllabus = () => {

    return (
        <>

            <div>
                <div className="flex grow">

                    <PdfDownloadFun bucketId="654e289e43a797e7bd5d" gradeName={"PG Syllabus"} />
                    <UploadFunc bucketId={"654e289e43a797e7bd5d"} gradeName={"Upload PDF for PG Class"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654e2863460eec5fcf1d" gradeName={"KG Syllabus"} />
                    <UploadFunc bucketId={"654e2863460eec5fcf1d"} gradeName={"Upload Syllabus PDF for KG Class"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654e28b866e704b670ec" gradeName={"Nursery Syllabus"} />
                    <UploadFunc bucketId={"654e28b866e704b670ec"} gradeName={"Upload Syllabus PDF for Nursery Class"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f59b5c0f89c884374" gradeName={"Grade One Syllabus"} />
                    <UploadFunc bucketId={"654f59b5c0f89c884374"} gradeName={"Upload Syllabus PDF for Grade-One"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f59e0a5d14a0cf6ff" gradeName={"Grade Two Syllabus"} />
                    <UploadFunc bucketId={"654f59e0a5d14a0cf6ff"} gradeName={"Upload Syllabus PDF for Grade-Two"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5a01bc85e4eb79fe" gradeName={"Grade Three Syllabus"} />
                    <UploadFunc bucketId={"654f5a01bc85e4eb79fe"} gradeName={"Upload Syllabus PDF for Grade-Three"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5a2ca705d18f9ed9" gradeName={"Grade Four Syllabus"} />
                    <UploadFunc bucketId={"654f5a2ca705d18f9ed9"} gradeName={"Upload Syllabus PDF for Grade-Four"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5a51a3a2f89dccf8" gradeName={"Grade Five Syllabus"} />
                    <UploadFunc bucketId={"654f5a51a3a2f89dccf8"} gradeName={"Upload Syllabus PDF for Grade-Five"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5b794e79d58b2e27" gradeName={"Grade Six Syllabus"} />
                    <UploadFunc bucketId={"654f5b794e79d58b2e27"} gradeName={"Upload Syllabus PDF for Grade-Six"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5ba86d2337d60b13" gradeName={"Grade Seven Syllabus"} />
                    <UploadFunc bucketId={"654f5ba86d2337d60b13"} gradeName={"Upload Syllabus PDF for Grade-Seven"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5bcb64f24d9ec4de" gradeName={"Grade Eight Syllabus"} />
                    <UploadFunc bucketId={"654f5bcb64f24d9ec4de"} gradeName={"Upload Syllabus PDF for Grade-Eight"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="654f5be934a29dd468b0" gradeName={"Grade Nine Syllabus"} />
                    <UploadFunc bucketId={"654f5be934a29dd468b0"} gradeName={"Upload Syllabus PDF for Grade-Nine"} />
                </div>

            </div>

        </>
    );
};

export default UploadpdfForSyllabus;
