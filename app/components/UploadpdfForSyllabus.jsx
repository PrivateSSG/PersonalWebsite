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

                    <PdfDownloadFun bucketId="6544ed78792055286a91" gradeName={"Grade One"} />
                    <UploadFunc bucketId={"6544ed78792055286a91"} gradeName={"Upload PDF for Grade-One"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544ed8fbada4a89c1fb" gradeName={"Grade Two"} />
                    <UploadFunc bucketId={"6544ed8fbada4a89c1fb"} gradeName={"Upload PDF for Grade-Two"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544eda63956504db9ab" gradeName={"Grade three"} />
                    <UploadFunc bucketId={"6544eda63956504db9ab"} gradeName={"Upload PDF for Grade-Three"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544edbdc2cc649e5ed8" gradeName={"Grade Four"} />
                    <UploadFunc bucketId={"6544edbdc2cc649e5ed8"} gradeName={"Upload PDF for Grade-Four"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544edcfa12fa74effef" gradeName={"Grade Five"} />
                    <UploadFunc bucketId={"6544edcfa12fa74effef"} gradeName={"Upload PDF for Grade-Five"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544e599d70bbf72fe75" gradeName={"Grade Six"} />
                    <UploadFunc bucketId={"6544e599d70bbf72fe75"} gradeName={"Upload PDF for Grade-Six"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544edfadbcb202bd369" gradeName={"Grade Seven"} />
                    <UploadFunc bucketId={"6544edfadbcb202bd369"} gradeName={"Upload PDF for Grade-Seven"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544ee14e134f523f42e" gradeName={"Grade Eight"} />
                    <UploadFunc bucketId={"6544ee14e134f523f42e"} gradeName={"Upload PDF for Grade-Eight"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544ee2c333fe6a28b6a" gradeName={"Grade Nine"} />
                    <UploadFunc bucketId={"6544ee2c333fe6a28b6a"} gradeName={"Upload PDF for Grade-Nine"} />
                </div>

            </div>

        </>
    );
};

export default UploadpdfForSyllabus;
