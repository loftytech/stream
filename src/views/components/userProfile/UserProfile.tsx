import { Wrapper } from "./styles";


const UserProfile: React.FC = () => {

    return (

        <Wrapper>
            <img src="/assets/img/avatar-img.png" alt="" />
            <div className="info">
                <h4>Mariam</h4>
                <span>a.mariam@mezovest.com</span>
            </div>
        </Wrapper>
    );
}
 
export default UserProfile;