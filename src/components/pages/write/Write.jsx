import './write.css'

export default function Write() {
    return (
        <div className="write pt-14">
            <form className="writeForm">
                <div className="writeFormGroup ml-14 flex items-center">
                    <label htmlFor="fileInput">
                        <i class="fa-solid fa-plus w-6 h-6 rounded-full border"></i>
                    </label>
                    <input type="file" id="fileInput" className="hidden"/>
                    <input type="text" placeholder="title" autoFocus={true}/>
                </div>
                <div className="writeFormGroup ml-14 flex items-center">
                    <textarea placeholder="Tell your Story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit bg-black text-white ml-14 flex items-center">Publish</button>
            </form>
        </div>
    )
}
