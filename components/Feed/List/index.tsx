import { FlashList } from "@shopify/flash-list";
import React from "react";
import Post, { PostType } from "@/components/Feed/Post";
import { Dimensions } from "react-native";

const POSTS: PostType[] = [
  {
    user: {
      username: "gabrielheiwa",
      photo:
        "https://img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg",
    },
    content: [
      {
        type: "photo",
        data: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg",
      },
    ],
  },
  {
    user: {
      username: "gabrielheiwa",
      photo:
        "https://img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg",
    },
    content: [
      {
        type: "photo",
        data: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg",
      },
      {
        type: "outfit",
        data: {
          top: "https://img.freepik.com/premium-photo/portrait-smiling-young-man-standing-outdoors_1048944-29813224.jpg",
          bottom:
            "https://t4.ftcdn.net/jpg/02/23/04/17/240_F_223041718_P8ywyiHRy1SJrplZIhfTLR1TRYHcVnDl.jpg",
        },
      },
      {
        type: "photo",
        data: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg",
      },
      {
        type: "outfit",
        data: {
          top: "https://img.freepik.com/premium-photo/portrait-smiling-young-man-standing-outdoors_1048944-29813224.jpg",
          bottom:
            "https://t4.ftcdn.net/jpg/02/23/04/17/240_F_223041718_P8ywyiHRy1SJrplZIhfTLR1TRYHcVnDl.jpg",
        },
      },
    ],
  },
  {
    user: {
      username: "gabrielheiwa",
      photo:
        "https://img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg",
    },
    content: [
      {
        type: "photo",
        data: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg",
      },
      {
        type: "outfit",
        data: {
          top: "https://img.freepik.com/premium-photo/portrait-smiling-young-man-standing-outdoors_1048944-29813224.jpg",
          bottom:
            "https://t4.ftcdn.net/jpg/02/23/04/17/240_F_223041718_P8ywyiHRy1SJrplZIhfTLR1TRYHcVnDl.jpg",
        },
      },
    ],
  },
  {
    user: {
      username: "gabrielheiwa",
      photo:
        "https://img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg",
    },
    content: [
      {
        type: "photo",
        data: "https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg",
      },
      {
        type: "outfit",
        data: {
          top: "https://img.freepik.com/premium-photo/portrait-smiling-young-man-standing-outdoors_1048944-29813224.jpg",
          bottom:
            "https://t4.ftcdn.net/jpg/02/23/04/17/240_F_223041718_P8ywyiHRy1SJrplZIhfTLR1TRYHcVnDl.jpg",
        },
      },
    ],
  },
];

export default function PostList() {
  return (
    <FlashList
      renderItem={({ item }) => {
        return <Post post={item} />;
      }}
      estimatedItemSize={Dimensions.get("screen").height * 0.8}
      data={POSTS}
    />
  );
}
