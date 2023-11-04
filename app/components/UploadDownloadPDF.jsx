import PdfDownloadFun from "./PdfDownloadFun";
import UploadFunc from "./UploadFunc";
const UploadDownloadPDF = () => {

    return (
        <>

            <div>
                <div className="flex grow">

                    <PdfDownloadFun bucketId="65438b60d7c109a7a7d5" gradeName={"PG"} />
                    <UploadFunc bucketId={"65438b60d7c109a7a7d5"} gradeName={"Upload PDF for PG Class"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544e599d70bbf72fe75" gradeName={"KG"} />
                    <UploadFunc bucketId={"6544e599d70bbf72fe75"} gradeName={"Upload PDF for KG Class"} />
                </div>
                <div className="flex">

                    <PdfDownloadFun bucketId="6544ed5b0c57db9d68ef" gradeName={"Nursery Class"} />
                    <UploadFunc bucketId={"6544ed5b0c57db9d68ef"} gradeName={"Upload PDF for Nursery Class"} />
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

export default UploadDownloadPDF;
