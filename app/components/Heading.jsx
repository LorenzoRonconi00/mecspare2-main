'use client';

const Heading = ({
    title,
    subtitle,
    center
}) => {
    return ( 
        <div className={center ? 'text-center' : 'text-center'}>
            <div
            className="text-2xl font-bold"
            >   
                {title}
            </div>
            <div
            className="font-bold text-neutral-500 mt-7 mb-5"
            >
                {subtitle}
            </div>
        </div>
     );
}
 
export default Heading;