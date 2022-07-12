function UnauthCalendarView () {
    return (
        <div>
            Connect Wallet to See Your Available Dates
        </div>
    )
}

function AuthCalenderView() {
    return (
        <div>
            Select from the dates Below!
        </div>
    )
}

export default function CalendarView({isSignedIn}) {
    return (
        <div>
            {isSignedIn 
                ?   <AuthCalenderView />
                :   <UnauthCalendarView />
            }
        </div>
    )
}