import { Wrapper } from "./styles";

interface LoaderInterface {
    topColor?: string
    sideColor?: string
    styleTwo?: boolean
    topPadding?: string
    bottomPadding?: string
    center?: boolean
}
const Loader: React.FC<LoaderInterface> = ({topColor, sideColor, styleTwo = false, center = false, topPadding = "0px", bottomPadding = "0px"}) => {

    return (
        <Wrapper center={center} topPadding={topPadding} bottomPadding={bottomPadding} topColor={styleTwo ? "#2F4F4E" : topColor} sideColor={styleTwo ? "#2F4F4E44" : sideColor} />
    );
}
 
export default Loader;