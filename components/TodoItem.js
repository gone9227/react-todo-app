import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { FontAwesome } from '@expo/vector-icons'
import DeleteButton from './DeleteButton'

const TodoItem = ({
    title,
    done,
    remove,
    toggle,
}) => {
    return(
        <Swipeable
            renderRightActions={() => <DeleteButton onPress={remove} />}
        >
            <View style={styles.container}>
                <View style={styles.todo}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={toggle}
                        style={done ? styles.done : styles.check}
                    >
                        <FontAwesome name="check" color={done ? '#FFFFFF' : '#E0E0E0'} size={14} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FFFFFF',
    },
    todo:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    title: {
        fontSize: 16,
        color: '#424242'
    },
    check: {
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 14,
    },
    done: {

        backgroundColor: '#6830CF',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 14,
    }

})

export default TodoItem