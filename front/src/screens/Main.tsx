import {useEffect} from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import IconButton from "../components/IconButton";
import Footer from "../components/Footer";
import MainLayout from "../styles/mainLayout";
import { useObserver } from "mobx-react";
import IndexStore from "../stores/IndexStore";
import axios from "../utils/axios"
import * as SecureStore from 'expo-secure-store';

import CommonLayout from "../components/CommonLayout";
import MainHeader from "../components/MainHeader";
import MainImg from "../../assets/images/main-puppy-with-girl-walk-img.png";
import TraceMainImg from "../../assets/images/trace-main-img.png";
import SleepMainImg from "../../assets/images/permanant-sleep-main-img.png";
import NftCardIcon from "../../assets/images/nft-card-icon.png";
import VaccineIcon from "../../assets/images/vaccine-icon.png";
import AdoptionIcon from "../../assets/images/adoption-icon.png";
import PhotoAlbumIcon from "../../assets/images/photo-album-icon.png";

const Main = ({ navigation }: any) => {
	const {LoginStore} = IndexStore();

	const authHandling = (pageName: string) => {
		if(pageName === 'Three'){
			navigation.navigate(pageName);
			return;
		}

		if(LoginStore.isLogged){
			navigation.navigate(pageName);
		}else{
			alert("해당 서비스는 로그인 후 이용가능합니다.");
		}
	}

	useEffect(() => {
		axios.post('/user', {
			"idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjMGI2OTEzZmUxMzgyMGEzMzMzOTlhY2U0MjZlNzA1MzVhOWEwYmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MzA2MzY1MTA4My1rYWNzZGlxcGhjcTJxbTRtbjQwZmpqaGFnOXA1MG5vcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjgzMDYzNjUxMDgzLWthY3NkaXFwaGNxMnFtNG1uNDBmampoYWc5cDUwbm9xLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMzQ3NTYzOTE3OTg3NTMxMjk3IiwiZW1haWwiOiJjY3k5ODAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiaFlXV3YxNjdKbEVXU0czalJORVFsdyIsIm5hbWUiOiLstZzssKzsmIEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSXJHMl90REh4aGh3NGtLazZ3bm43QndvOVI3SHoxaEMzR2JTNDVRb3luPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IuywrOyYgSIsImZhbWlseV9uYW1lIjoi7LWcIiwibG9jYWxlIjoia28iLCJpYXQiOjE2OTUxMDY5OTMsImV4cCI6MTY5NTExMDU5M30.R4mBHS32wxCeD81pxgHrkhW1Evl_mlL9s9OK9XvpzIPn7aeyV89FAI2mtJfrOSmpidvdOBe20CsYpI8MWIxRdMn8FlfcqoHInqjQOyYX6ISy697sn14wndwBxs5dH9oCIuUc2xxUy-UyWly0y58W1jqhzpZ2S1R3LIUKt0aoSne0fiSsG8pNp0lAB8EUv2Rr3wd-At8Yh0d80xdkByS2UzqueOW_HiDetudv2ygN-lD-7tboRvO_2l77PL9fliicutrEqN3G_a3-mLeOc1XPpLsbkLyzIR2kOAI1KMUMrGY56UlXpVNRlPwq-G-Sr59rIBmPm1LVHo7oskWkP9F4dA",
			"accessToken": "ya29.a0AfB_byCMvcQstYT0zcZmWseljdLLqQkI8HlHVNpGPaRlk6w5gXflKB4uUDMYr4jjrVgMxBsGqQQmTDoYHZbIrILs_3bZUWMMxqWyt2YMSpJQDcJ5IB8j0jvVqMMSPRiOjx9ANcqd7dRKaAmSChsrvGPojKxnx_eC0P6qaCgYKASQSARASFQGOcNnCAsYm1LYyjHCSgMHOW1qsLQ0171",
			"refreshToken": "1//0eBI9XD-NyEGRCgYIARAAGA4SNwF-L9IrAI6kKQPgbROx11Lgalg5-CYmnjjexWNIYpa5ehvZydBeZf6Qikgy8YSnairn8gvki74",
		}).then(async (data) => {
			console.log("userInfo 저장", data.data.data);

			SecureStore.setItemAsync("accessToken", data.data.data.accessToken);
			SecureStore.setItemAsync("refreshToken", data.data.data.refreshToken);
		})
	});

	return (
		<>
			<CommonLayout>
				<MainHeader></MainHeader>

				<View style={MainLayout.walkMainWrap}>
					<Text style={MainLayout.walkMainTitle}>
						함께걷는 내 반려견{"\n"}
						평생 지켜줄 수 있도록{"\n"}
						<Text style={MainLayout.walkBoldText}>IDog</Text> 와 함께
					</Text>
					<Text style={MainLayout.walkMainDesc}>
						IDog은 내 반려견의 프로필을 NFT화하여{"\n"}
						사육방지를 조장하고 반려견과의 추억을 모으는 플랫폼입니다.
					</Text>
				</View>

				<View>
					<View style={MainLayout.walkMainImg}>
						<Image source={MainImg} />
					</View>
					<View style={MainLayout.walkButtonWrap}>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => authHandling('Walk')}
						>
							<View style={MainLayout.walkRootButton}>
								<Text style={MainLayout.walkRootButtonText}>
									산책루트 확인하기
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => navigation.navigate("CreateWalletMain")}
						>
							<Text style={MainLayout.ifNoAuthText}>회원이 아니신가요?</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={MainLayout.traceWrap}>
					<View>
						<Image source={TraceMainImg} style={MainLayout.traceMainImg} />
					</View>
					<View style={MainLayout.traceInfo}>
						<Text style={MainLayout.traceTitle}>
							평생을 함께,{"\n"}
							<Text style={MainLayout.boldTraceInfo}>반려견의 흔적</Text>을
							{"\n"}
							남길 수 있다면
						</Text>
						<Text style={MainLayout.traceDesc}>
							내 반려견{" "}
							<Text style={MainLayout.boldTraceDesc}>프로필 등록</Text>하셨나요?
							{"\n"}
							IDog에서 내 반려견의 정보를{"\n"}
							관리하세요.
						</Text>
						<TouchableOpacity activeOpacity={0.7} onPress={() => authHandling('Profile')}>
							<View style={MainLayout.createProfileButton}>
								<Text style={MainLayout.createProfileButtonText}>
									프로필 등록하기
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={MainLayout.tribeWrap}>
					<Image source={SleepMainImg} style={MainLayout.tribeMainImg} />
					<View style={MainLayout.tribeInfoWrap}>
						<Text style={MainLayout.tribeTitle}>평생 행복하도록.</Text>
						<Text style={MainLayout.tribeDesc}>
							반려견과 함께했던 모든 추억이 잊혀지지 않고{"\n"}
							기억될 수 있도록 온라인 추모공원에서 관리해드려요
						</Text>
						<TouchableOpacity activeOpacity={0.7} onPress={() => authHandling('Three')}>
							<View style={MainLayout.moveTribeButton}>
								<Text style={MainLayout.moveTribeButtonText}>
									온라인 추모공원 둘러보기
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={MainLayout.randingButtonWrap}>
					{
					LoginStore.isLogged ?
					<Text style={MainLayout.randingTitle}>
						<Text style={MainLayout.boldRandingTitle}>김싸피</Text> 님을 위한 내
						반려견 서비스
					</Text>
					:
					<Text style={MainLayout.randingTitle}>
						<Text style={MainLayout.boldRandingTitle}>로그인 이후 사용이 가능</Text>한 서비스입니다.
					</Text>
					}
					<View style={MainLayout.flexButtonWrap}>
						<IconButton
							desc="반려견 평생소장"
							title="프로필 제작"
							iconImage={NftCardIcon}
							movePage="Profile"
						/>
						<IconButton
							desc="반려견 다이어리"
							title="진료기록"
							iconImage={VaccineIcon}
							movePage="Profile"
						/>
					</View>
					<View style={MainLayout.flexButtonWrap}>
						<IconButton
							desc="간편한 소유권 증명"
							title="입양절차"
							iconImage={AdoptionIcon}
							movePage="Adoption"
						/>
						<IconButton
							desc="포토앨범"
							title="사진첩"
							iconImage={PhotoAlbumIcon}
							movePage="Album"
						/>
					</View>
				</View>

				<Footer />
			</CommonLayout>
		</>
	);
};

export default Main;
