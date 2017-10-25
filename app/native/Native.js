import React, {Component} from "react";

import {View, Button, Text} from "react-native";
import { StackNavigator} from 'react-navigation'

import UrlLink from "./UrlLink";

 import CameraRollView from "./CameraRollView";

 //import ImageBrowser from "./ImageBrowser";
 import Snap from "./Snap";

 import GeoLoc from "./GeoLoc";
 import FileSys from "./FileSys";

 import Inputs from "./Inputs";

// import Contact from "./Contact";
// import Activity from "./Activity";

//import Push from "./Push";


import NativeCall from "./NativeCall"
// import SqliteAccess from "./SqliteAccess";

class NativeFeature extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                 <Button onPress={()=> this.props.navigation.navigate("CameraRollView", {title: 'Camera Roll'})} 
                        title="Camera Roll">

                </Button>

            
                {/* <Button onPress={()=> this.props.navigation.navigate("ImageBrowser", {title: 'Image Browser'})} 
                        title="Image Browser">

                </Button> */}

                <Button onPress={()=> this.props.navigation.navigate("Snap", {title: 'Snap'})} 
                        title="Snap">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("GeoLoc", 
                                                      {title: 'Geo Location'})} 
                        title="Geo Location">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("FileSys", 
                                                      {title: 'File System'})} 
                        title="File System">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("Inputs", 
                                                      {title: 'Inputs'})} 
                        title="Input Controls">

                </Button>

             {/*   <Button onPress={()=> this.props.navigation.navigate("Contact", {title: 'Contact'})} 
                        title="Contact">

                </Button>

                <Button onPress={()=> this.props.navigation.navigate("Activity", {title: 'Activity'})} 
                        title="Activity">

                </Button>

*/}

                {/* <Button onPress={()=> this.props.navigation.navigate("Push", {title: 'Push'})} 
                        title="Push">

                </Button>  */}

                <Button onPress={()=> this.props.navigation.navigate("Linking", {title: 'Linking'})} 
                        title="Linking">

                </Button>

                <Button onPress={()=> this.props.navigation.navigate("NativeCall", {title: 'NativeCall'})} 
                        title="NativeCall">

                </Button>

{/* 

                <Button onPress={()=> this.props.navigation.navigate("SqliteAccess", {title: 'Sqlite Access'})} 
                        title="Sqlite Access">

                </Button> */}
                
            </View>
        )
    }
}

const FeatureStackNav = StackNavigator({
    Main: {
        screen: NativeFeature,
    },

    GeoLoc: {
        screen: GeoLoc
    },

    FileSys: {
        screen: FileSys
    },


    Inputs: {
        screen: Inputs
    },

    CameraRollView: {
        screen: CameraRollView
    },

    // ImageBrowser: {
    //     screen: ImageBrowser
    // },

    Snap: {
        screen: Snap
    },

    // Contact: {
    //     screen: Contact
    // },

    // Activity : {
    //     screen : Activity
    // },

    // Push: {
    //     screen: Push
    // },

    Linking: {
        screen: UrlLink
    },

    NativeCall: {
        screen: NativeCall
    }
})

export default FeatureStackNav;