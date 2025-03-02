const useDownloadCV = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = './info/CV.doc';
        link.download = 'IlyaBurlakCV.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return { downloadCV };
};

export default useDownloadCV;