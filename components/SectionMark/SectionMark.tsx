type MarkProps = {
    title: string;
};

const markContent: string = "Our Courses"
  
function SectionMark({title}: MarkProps) {
    return (
        <section id="courseMark" className="bg-pinkish text-pink flex flex-col text-center p-5 sm:p-6 md:p-7 lg:p-9 xl:p-14 2xl:p-17 my-5">
        <h1 className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold">{title}</h1>
        </section>
    );
}

function SectionMarkContainer(){
    return <SectionMark title={markContent}/>
}

export {SectionMarkContainer};
  
