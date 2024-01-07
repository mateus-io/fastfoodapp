import { useState, useEffect } from 'react'
import { FlatList, Alert } from 'react-native'
import { CategoryBadge } from "../molecules/CategoryBadge";
import { Category } from '../../models/Category'
import { getCategories } from '../../services/getCategories';

interface HorizontalCategoriesProps {}

export function HorizontalCategories(props: HorizontalCategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([])
    
    async function didMount() {
        try {
            const getCategoriesResponse = await getCategories()

            const categoriesResponse = getCategoriesResponse.map((category) => ({
                id: category.id,
                name: category.name,
                illustration: category.url
            }))

            setCategories(categoriesResponse)
        } catch (error) {
            Alert.alert((error as Error).message)
        }
    }

    useEffect(() => {
        didMount()
    }, [])
    
    return (
        <FlatList
            data={categories}
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