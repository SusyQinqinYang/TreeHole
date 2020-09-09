import {connect} from "react-redux";
import addNewWords from "../actions/newWords";
import Home from "../Components/Home.jsx";

const mapStateToProps = (state) => {
    return {
        newWords: state.newWords
    }
};

export default connect(mapStateToProps, { addNewWords })(Home);