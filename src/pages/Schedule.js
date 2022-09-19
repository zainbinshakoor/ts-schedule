import React, { useRef } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
export default function Schedule() {
    const inputRef = useRef(null)
    const handleFile = () => {
        inputRef.current.click();
    }
    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);


        event.target.value = null;


        console.log(event.target.files);


    };
    return (
        <>

            <div className="d-flex align-items-center justify-content-center min-vh-100">

                <div className="container">
                    <div className="scheduleHeader">
                        <div className="row">
                            <div className="col-12">
                                <b>Import Schedule</b>
                                <button className='btn btn-color float-end'>Back To schedule</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12 col-md-12 col-lg-8  mx-auto">
                            <div className="card">
                                <label className='font-weight-bold p-1 m-2'>  <b>Instructions:</b> </label>
                                <hr />
                                <p className='ms-4'>Import a schedule of games by uploading a file that includes opponents, times, and locations.</p>
                                <div className="card m-3 p-2">
                                    <p>The first row should be your column headings (e.g., date, time, opponent, location). See the Schedule Template below for examples.</p>
                                    <input

                                        ref={inputRef}
                                        type="file"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                    <div className="col-12 col-md-6 col-lg-3">

                                        <button type='file' className='btn-contained btn-sm w-100 btn-color rounded' onClick={handleFile}><i className="bi bi-cloud-arrow-up-fill me-1"></i>Choose File</button>
                                    </div>
                                    <p className='mt-2'> <a href="" className='d-inline text-decoration-none'>Download Our Schedule Template </a>| (Acceptable Formats: .XLS, .XLSX, and .CSV)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='text-center'><b>Follow us on:</b>
                            &nbsp;
                            <a href="" className='text-decoration-none' target="_blank"><i class="bi bi-facebook"></i>Facebook</a>
                            &nbsp;|&nbsp;
                            <a href="" className='text-decoration-none'><i class="bi bi-twitter"></i>Twitter</a>
                            &nbsp;|&nbsp;
                            <a href="" className='text-decoration-none'><i class="bi bi-rss"></i>Follow</a>
                            &nbsp;
                        </p>

                    </div>
                    <div className="footer text-center">
                        <div className='col-sm-12'>

                            Copyright © 2005-2022 TeamSnap Inc.

                            |&nbsp;
                            <a href="" className='text-decoration-none'>Privacy Policy</a>
                            &nbsp;|&nbsp;
                            <a href="" className='text-decoration-none'>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
