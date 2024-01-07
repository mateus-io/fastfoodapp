import { Image, Platform, ScrollView, StyleSheet } from 'react-native'
import { View } from "../components/Themed";
import { PrimaryText } from "../components/atoms/PrimaryText";
import Images from '../constants/Images';
import { StatusBar } from 'expo-status-bar';
import { SectionHeader } from '../components/molecules/SectionHeader';
import { HorizontalCategories } from '../components/organisms/HorizontalCategories';
import { RestaurantList } from '../components/organisms/RestaurantList';

export default function HomeScreen() {
    return (
        <>
            <View
                style={styles.headerContent}
            >
                <Image
                    resizeMode="cover"
                    source={Images.TinyMapIllustration}
                    style={styles.tinyMapIllustration}
                />

                <View
                    style={styles.mapInfoContent}
                >
                    <PrimaryText
                        style={styles.locationLabel}
                    >
                        Current location
                    </PrimaryText>

                    <PrimaryText
                        style={styles.addressLabel}
                    >
                        NYC, Boardway ave 79
                    </PrimaryText>
                </View>
            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
                style={styles.scrollViewContent}
            >
                <View
                    style={styles.banners}
                >
                    <Image
                        resizeMode="cover"
                        source={Images.DashboardBanner}
                        style={styles.dashboardBanner}
                    />
                </View>
                
                <View
                    style={styles.topCategoriesContent}
                >
                    <SectionHeader
                        action={() => {}}
                        actionLabel="View all"
                        title="Top categories"
                    />
                    
                    <HorizontalCategories />
                </View>

                <View
                    style={styles.recommendedContent}
                >
                    <SectionHeader
                        action={() => {}}
                        actionLabel="View all"
                        title="Recommended"
                    />

                    <RestaurantList />
                </View>
            </ScrollView>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
        </>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
    },
    tinyMapIllustration: {
        width: 24,
        height: 24,
    },
    mapInfoContent: {
        flexDirection: 'column',
        marginLeft: 12
    },
    locationLabel: {
        fontSize: 13,
        fontWeight: '400',
        color: '#464E58',
        opacity: .8,
    },
    addressLabel: {
        color: '#12142C',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 2,
    },
    scrollViewContent: {
        paddingBottom: 12
    },
    banners: {
        height: 200,
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dashboardBanner: {
        width: '94%',
        height: 170,
        borderRadius: 12,
    },
    topCategoriesContent: {
        flexDirection: 'column'
    },
    recommendedContent: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 16,
    }
})