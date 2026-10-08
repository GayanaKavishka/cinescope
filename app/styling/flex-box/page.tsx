export default function FlexOnePage(){
    return(
        <div className="flex flex-col md:flex-row min-h-screen justify-center items-center bg-purple-200 gap-6 p-6">
            <div className="h-30 w-30 p-6 rounded-lg bg-green-300 text-center">Child 1</div>
            <div className="h-30 w-30 p-6 rounded-lg bg-blue-300 text-center">Child 2</div>
            <div className="h-30 w-30 p-6 rounded-lg bg-yellow-300 text-center">Child 3</div>
            <div className="h-30 w-30 p-6 rounded-lg bg-red-300 text-center">Child 3</div>

        </div>
    );
}