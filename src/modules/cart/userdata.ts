import http from "@/utils/http";
import axios from "axios";
import useSWR, { mutate } from "swr";

const INIT_DATA: ProfileData[] = [
  {
    nickname: "",
    phone: "",
    email: "",
  },
];
const PROFILE_DATA_KEY = "/auth/profile";

export interface ProfileData {
  nickname: string;
  phone?: string;
  email?: string;
}

// const profileFetcher = async ([key]) => {
const profileFetcher = async (key: string): Promise<ProfileData | ProfileData[]> => {
  console.log("--call profileFetcher--");

  try {
    const response = await http.get<ProfileData>(`${key}?_sort=id?_sort=id&_order=desc`);

    console.log("--call cartFetcher response data--");
    console.log(response.data);

    return response.data;
  } catch (e: any) {
    // 캐시에 없으면 초기값 반환
    return INIT_DATA;
  }
};

export const useProfileData = () => {
  const {
    data: profileData,
    mutate: mutateCartData,
    isValidating: isCartDataValidating,
  } = useSWR<ProfileData>([PROFILE_DATA_KEY], profileFetcher, {
    // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
    fallbackData: INIT_DATA,
    // 포커스될때 fetcher로 가져오기 해제
    // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
    revalidateOnFocus: false,
    // // 특정 주기별로 데이터 가져오기
    // refreshInterval: 5000,
  });

  return {
    profileData,
    isCartDataValidating,
  };
};
