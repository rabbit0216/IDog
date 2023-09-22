import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React, { useEffect } from "react";
import BG1 from "../../assets/images/BG1.png";
import {
	responsiveHeight,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import LottieView from "lottie-react-native";
import cloud22 from "../../assets/images/cloud22.png";
import cloud32 from "../../assets/images/cloud32.png";

const Main = () => {
	const grasses = [
		MemorialParkDesignLayout.grass1,
		MemorialParkDesignLayout.grass2,
		MemorialParkDesignLayout.grass3,
		MemorialParkDesignLayout.grass4,
		MemorialParkDesignLayout.grass5,
		MemorialParkDesignLayout.grass6,
	];

	const animatedX1 = new Animated.Value(-responsiveWidth(0));
	const animatedX2 = new Animated.Value(-responsiveWidth(50));

	const animatedLoop = (animatedValue: Animated.Value) => {
		Animated.sequence([
			Animated.timing(animatedValue, {
				toValue: responsiveWidth(150),
				duration: 100000,
				useNativeDriver: true,
			}),
			Animated.timing(animatedValue, {
				toValue: responsiveWidth(-200),
				duration: 0,
				useNativeDriver: true,
			}),
		]).start(() => {
			animatedLoop(animatedValue);
		});
	};

	useEffect(() => {
		animatedLoop(animatedX1);
		animatedLoop(animatedX2);
	}, []);

	return (
		<>
			<View style={MemorialParkDesignLayout.view1}>
				<Image source={BG1} style={MemorialParkDesignLayout.bg1} />
				<Animated.Image
					source={cloud22}
					style={[
						MemorialParkDesignLayout.cloud1,
						{ transform: [{ translateX: animatedX1 }] },
					]}
				/>
				<Animated.Image
					source={cloud32}
					style={[
						MemorialParkDesignLayout.cloud2,
						{ transform: [{ translateX: animatedX2 }] },
					]}
				/>
				{grasses.map((grass, index) => {
					return (
						<LottieView
							key={index}
							source={require("../../assets/grass.json")}
							style={[
								grass,
								// { top: responsiveHeight(103) }
							]}
							autoPlay
							loop
							speed={0.4}
						/>
					);
				})}
			</View>
		</>
	);
};

const MemorialParkDesignLayout = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	view1: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	bg1: {
		zIndex: -1,
		// backgroundColor: "#EE8A72",
		resizeMode: "cover",
	},
	cloud1: {
		zIndex: -2,
		position: "absolute",
		resizeMode: "cover",
		top: responsiveHeight(55),
	},
	cloud2: {
		position: "absolute",
		resizeMode: "cover",
		top: responsiveHeight(50),
		left: responsiveWidth(0),
	},
	grass1: {
		position: "absolute",
		top: responsiveHeight(50),
		right: responsiveWidth(43),
		transform: [{ scale: 1 }],
	},
	grass2: {
		position: "absolute",
		top: responsiveHeight(48),
		right: responsiveWidth(35),
		transform: [{ scale: 0.8 }],
	},
	grass3: {
		position: "absolute",
		top: responsiveHeight(50),
		left: responsiveWidth(36),
		transform: [{ scale: 1 }],
	},
	grass4: {
		position: "absolute",
		top: responsiveHeight(47),
		left: responsiveWidth(44),
		transform: [{ scale: 0.9 }],
	},
	grass5: {
		position: "absolute",
		top: responsiveHeight(48),
		left: responsiveWidth(30),
		transform: [{ scale: 0.9 }],
	},
	grass6: {
		position: "absolute",
		top: responsiveHeight(49),
		right: responsiveWidth(25),
		transform: [{ scale: 1 }],
	},
});

export default Main;
