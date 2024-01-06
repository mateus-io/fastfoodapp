
import { FlatList } from 'react-native'
import { CategoryBadge } from "../molecules/CategoryBadge";

interface HorizontalCategoriesProps {}

export function HorizontalCategories(props: HorizontalCategoriesProps) {
    const categoriesMock = [
        {
            illustration: 'https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Vegan.png',
            name: 'Vegan'
        },
        {
            illustration: 'https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Meat.png',
            name: 'Meat'
        }
    ]
    
    return (
        <FlatList
            data={categoriesMock}
            renderItem={({ item }) => (
                <CategoryBadge
                    illustrationURI={item.illustration}
                    label={item.name}
                    onPress={() => {}}
                />
            )}
            horizontal
            keyExtractor={item => item.name}
        />
    )
}