import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,

} from 'react-native'
import Modal from 'react-native-modal'

const TaskModal = ({
    isVisible,
}) => {
    return (
        <Modal 
            isVisible={isVisible}
            avoidKeyboard
            style={styles.modal}
        >
            <View style={styles.container} >
                <TextInput 
                    placeholder="Enter a new task"
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end', 
        margin: 0,
    },
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }
})

export default TaskModal