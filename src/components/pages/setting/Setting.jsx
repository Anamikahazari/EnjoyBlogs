import Sidebar from "../../sidebar/Sidebar"
import "./setting.css"

export default function Setting() {
    return (
        <div className="setting flex">
            <div className="settingWrapper flex-9">    
                <div className="settingsTitle">
                    <span className="sittingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form>
                    <label>Profile Picture</label>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
