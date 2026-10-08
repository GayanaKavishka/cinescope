export default function GridPage(){
    return(
        <main className="min-h-screen flex flex-col justify-center items-center bg-purple-300 p-6">
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
            <div className="h-40 w-full p-6 rounded-lg bg-green-300 text-center">Child 1</div>
            <div className="h-40 w-full p-6 rounded-lg bg-blue-300 text-center">Child 2</div>
            <div className="h-40 w-full p-6 rounded-lg bg-yellow-300 text-center">Child 3</div>
            <div className="h-40 w-full p-6 rounded-lg bg-red-300 text-center">Child 3</div>

        </div>
        </main>
    );
}