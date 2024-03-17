import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {EyeIcon, EyeOffIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

type Props = {
  icon: any;
  password?: boolean;
} & React.ComponentProps<typeof TextInput>;

export const CustomInput = ({icon, password, ...props}: Props) => {
  const [showPassword, setShowPassword] = React.useState(password || false);

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        secureTextEntry={showPassword}
        style={styles.input}
        placeholderTextColor={colors.white}
        {...props}
      />
      {password && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            style={styles.icon}
            source={!showPassword ? EyeIcon : EyeOffIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    width: '100%',
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: colors.white,
  },
  input: {
    height: '100%',
    flexGrow: 1,
    paddingHorizontal: 4,
    color: colors.white,
  },
});
