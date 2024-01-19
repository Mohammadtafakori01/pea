import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  home_container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff', // Set your background color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Make the component take up the full width
  },
  deviceTitle: {
    fontSize: 16,
    fontFamily: 'Samim',
    color: '#333', // Set your text color
  },
  search_container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: '10%',
    marginVertical: 25,
    width: '80%',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '25%',
    width: '50%',
  },
  connectway_container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 50,
    gap: 10,
    marginVertical: 20,
  },
  connectway_button: {
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
  connectway_icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  connectway_buttonText: {
    marginTop: 5,
    color: 'purple',
    fontSize: 18,
    fontFamily: "Samim"
  },
  add_dvc_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#fff"
  },
  add_dvc_inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  add_dvc_label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Samim",
    color: "#333"
  },
  add_dvc_input: {
    width: '100%',
    height: 50,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Samim",
    textAlign: "center",
    textAlignVertical: "center"
  },
  add_dvc_button: {
    marginTop: 16,
    backgroundColor: '#f0f0ff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "purple"
  },
  add_dvc_buttonText: {
    color: "purple",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Samim",
  },
  addButton: {
    backgroundColor: '#f0f0ff',
    borderWidth: 1,
    borderColor: "purple", // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  burger: {},
  text: {
    fontFamily: 'Samim',
  },
  addButtonText: {
    color: "#8a3ab9",
    fontSize: 16
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontFamily: 'Samim',
  },
  button: {
    borderColor: colors.gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    backgroundColor: colors.white,
    elevation: 2,
    aspectRatio: 1 / 1,
  },
  search_button: {
    padding: 10,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});
