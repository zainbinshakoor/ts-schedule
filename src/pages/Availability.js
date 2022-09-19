import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"

export default function Availability() {
    return (
        <>
            <div className="container">
                <div class="alert alert-primary" role="alert">
                 <b>Reminder!show</b> In 14 days, your free trial will expire and you'll lose access to this Availability page! Upgrade now to keep on keepin' on.
                </div>
                <div className="row">
                    <div className="col-sm-12  ">
                        <div className="card p-2 p-lg-5">
                            <label className='text-center'><i class="bi bi-calendar3-fill"></i><b> Availability
                            </b></label>
                            <p className='w-lg-50 text-lg-start mx-lg-auto'>Nothing is more frustrating than having to forfeit a game because you don't have enough players. Likewise, having too many players show up means people don't get to play as much as they might want to. With TeamSnap, everybody will see who can attend which games (and who can't). So it's easy to line up subs for the games you need them.</p>
                            <div  className='col-sm-12 col-lg-6 mx-auto'>
                                <div className="card note-color text-white w-100 p-2 ">
                                    <p className=''><b> Note:</b> The player availability table will show up on this page automatically when upcoming games or events are created on the Schedule page. Currently, none are scheduled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
