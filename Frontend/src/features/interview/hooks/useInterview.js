// import { getAllInterviewReports, getInterviewReportById, generateInterviewReport, generateResumePdf } from "../services/interview.api"
// import { useContext, useEffect } from "react";
// import toast from "react-hot-toast";
// import { InterviewContext } from "../interview.context";
// import { useParams } from "react-router"

// export const useInterview = () => {
//     const context = useContext(InterviewContext)
//       const { interviewId } = useParams()    

//     if(!context) {
//         throw new Error("useInterview must be used within InterviewProvider")
//     }

//     const {loading, setLoading, report, setReport, reports, setReports} = context


//     const generateReport = async ({jobDescription, selfDescription, resumeFile}) => {
//         setLoading(true)
//         let loadingToast = toast.loading('Generating interview report...')
//         let response = null
//         try {
//             response = await generateInterviewReport({jobDescription, selfDescription, resumeFile})
//             setReport(response.interviewReport)
//             toast.dismiss(loadingToast)
//             toast.success('Interview report generated successfully!')
//         } catch (error) {
//             console.log(error);
//             toast.dismiss(loadingToast)
//             toast.error('Failed to generate report. Please try again.')
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReport
//     }

//     const getReportById = async (interviewId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getInterviewReportById(interviewId)
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//             toast.error('Failed to load report')
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReport
//     }

//     const getReports = async () => {
//         setLoading(true)
//         let response = null
//         try {
//           response = await getAllInterviewReports()
//           setReports(response?.interviewReports || [])
//         } catch (error) {
//            console.log(error)
//            setReports([])
//            toast.error('Failed to load reports')
//         } finally {
//           setLoading(false)
//         }

//         return response.interviewReports
//     }

//     const getResumePdf = async (interviewReportId) => {
//         setLoading(true)
//         let loadingToast = toast.loading('Generating resume PDF...')
//         let response = null
//         try {
//             response = await generateResumePdf({interviewReportId})
//             const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }));
//             const link = document.createElement("a");
//             link.href = url;
//             link.setAttribute("download", `resume_${interviewReportId}.pdf`);
//             document.body.appendChild(link);
//             link.click();
//             toast.dismiss(loadingToast)
//             toast.success('Resume downloaded successfully!')
//         } catch (error) {
//             console.log(error)
//             toast.dismiss(loadingToast)
//             toast.error('Failed to download resume')
//         } finally {
//             setLoading(false)
//         }
        
//         return response
//     } 

//     useEffect(() => {
//         if (interviewId) {
//             getReportById(interviewId)
//         } else {
//             getReports()
//         }
//     }, [ interviewId ])

//     return {
//         loading,
//         report,
//         reports,
//         generateReport,
//         getReportById,
//         getReports,
//         getResumePdf
//     }
// }

import { getAllInterviewReports, getInterviewReportById, generateInterviewReport, generateResumePdf } from "../services/interview.api"
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { InterviewContext } from "../interview.context";
import { useParams } from "react-router"

export const useInterview = () => {
    const context = useContext(InterviewContext)
    const { interviewId } = useParams()    

    if(!context) {
        throw new Error("useInterview must be used within InterviewProvider")
    }

    const {loading, setLoading, report, setReport, reports, setReports} = context

    const generateReport = async ({jobDescription, selfDescription, resumeFile}) => {
        setLoading(true)
        let loadingToast = toast.loading('Generating interview report...')
        let response = null
        try {
            response = await generateInterviewReport({jobDescription, selfDescription, resumeFile})
            setReport(response.interviewReport)
            toast.dismiss(loadingToast)
            toast.success('Report generated successfully')
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error('Failed to generate report. Please try again.')
        } finally {
            setLoading(false)
        }

        return response.interviewReport
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try {
            response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
            toast.error('Failed to load report')
        } finally {
            setLoading(false)
        }

        return response.interviewReport
    }

    const getReports = async () => {
        setLoading(true)
        let response = null
        try {
          response = await getAllInterviewReports()
          setReports(response?.interviewReports || [])
        } catch (error) {
           console.log(error)
           setReports([])
           toast.error('Failed to load reports')
        } finally {
          setLoading(false)
        }

        return response.interviewReports
    }

    const getResumePdf = async (interviewReportId) => {
        setLoading(true)
        let loadingToast = toast.loading('Generating resume PDF...')
        let response = null
        try {
            response = await generateResumePdf({interviewReportId})
            const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `resume_${interviewReportId}.pdf`);
            document.body.appendChild(link);
            link.click();
            toast.dismiss(loadingToast)
            toast.success('Resume downloaded successfully')
        } catch (error) {
            console.log(error)
            toast.dismiss(loadingToast)
            toast.error('Failed to download resume')
        } finally {
            setLoading(false)
        }
        
        return response
    } 

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        } else {
            getReports()
        }
    }, [ interviewId ])

    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports,
        getResumePdf
    }
}