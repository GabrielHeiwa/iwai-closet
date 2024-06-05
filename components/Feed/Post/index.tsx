import { Image } from "expo-image";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

type PostPhotoData = string;

type PostOutfitData = {
  top: string;
  bottom: string;
};

type PostContent = {
  type: "photo" | "outfit";
  data: PostPhotoData | PostOutfitData;
};

export type PostType = {
  user: {
    username: string;
    photo: string;
  };
  content: PostContent[];
};

export default function Post({ post }: { post: PostType }) {
  return (
    <View style={postStyles.container}>
      <View>
        {/* Header with username */}
        <View style={postStyles.headerContainer}>
          <Image
            style={postStyles.userPhoto}
            contentFit="cover"
            source={post.user.photo}
          />

          <Text style={postStyles.userName}>@{post.user.username}</Text>
        </View>

        {/* Body with the content images or outfits of users  */}
        <View style={postStyles.bodyContainer}>
          <PostContentView postContents={post.content} />
        </View>
      </View>
    </View>
  );
}

const postStyles = StyleSheet.create({
  container: {
    position: "relative",
    height: Dimensions.get("screen").height * 0.7,
    maxHeight: Dimensions.get("screen").height * 0.7,
    backgroundColor: "#d4d4d4",
  },
  headerContainer: {
    height: Dimensions.get("screen").height * 0.1,
    maxHeight: Dimensions.get("screen").height * 0.1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    paddingLeft: 8,
  },
  bodyContainer: {
    height: Dimensions.get("screen").height * 0.6,
    maxHeight: Dimensions.get("screen").height * 0.6,
  },
});

function PostContentView({ postContents }: { postContents: PostContent[] }) {
  // UseStates
  const [pageInView, setPageInView] = useState(0);

  // Functions
  function onPageInViewChange(position: number) {
    return setPageInView(position);
  }

  return (
    <View style={postContentViewStyles.container}>
      <PagerView
        style={postContentViewStyles.pageViewContainer}
        initialPage={0}
        onPageSelected={(ev) => onPageInViewChange(ev.nativeEvent.position)}
      >
        {postContents.map((postContent) => (
          <PostContent postContent={postContent} />
        ))}
      </PagerView>

      <View style={postContentViewStyles.indicatorContainer}>
        {postContents.length > 1 &&
          Array.from({ length: postContents.length }).map((_, index) => {
            return (
              <View
                style={{
                  ...postContentViewStyles.indicator,
                  backgroundColor: index === pageInView ? "#333" : "#d4d4d4",
                }}
              ></View>
            );
          })}
      </View>
    </View>
  );
}

const postContentViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageViewContainer: {
    flex: 1,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 16,
    right: 8,
    flexDirection: "row",
    gap: 8,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

function PostContent({ postContent }: { postContent: PostContent }) {
  if (postContent.type === "photo") {
    return (
      <Image
        style={postContentStyles.image}
        source={postContent.data as string}
      />
    );
  } else {
    return (
      <View style={postContentStyles.outfitContainer}>
        <Image
          style={postContentStyles.image}
          source={(postContent.data as PostOutfitData).top}
        />
        <Image
          style={postContentStyles.image}
          source={(postContent.data as PostOutfitData).bottom}
        />
      </View>
    );
  }
}

const postContentStyles = StyleSheet.create({
  outfitContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
