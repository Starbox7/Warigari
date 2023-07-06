import 'package:app/src/modules/signup/models/signup_model.dart';
import 'package:app/src/modules/signup/services/signup_service.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupViewModel extends StateNotifier<SignupModel> {
  SignupViewModel()
      : super(SignupModel(
            id: '', password: '', email: '', nickname: '', passwordValid: ''));

  void setId(String id) => state = SignupModel(
        email: state.email,
        id: id,
        nickname: state.nickname,
        password: state.password,
        passwordValid: state.passwordValid,
      );

  void setPassword(String password) => state = SignupModel(
        email: state.email,
        id: state.id,
        nickname: state.nickname,
        password: password,
        passwordValid: state.passwordValid,
      );

  void setPasswordValid(String passwordValid) => state = SignupModel(
        email: state.email,
        id: state.id,
        nickname: state.nickname,
        password: state.password,
        passwordValid: passwordValid,
      );

  void setEmail(String email) => state = SignupModel(
        email: email,
        id: state.id,
        nickname: state.nickname,
        password: state.password,
        passwordValid: state.passwordValid,
      );

  void setNickname(String nickname) => state = SignupModel(
        email: state.email,
        id: state.id,
        nickname: nickname,
        password: state.password,
        passwordValid: state.passwordValid,
      );

  Future<void> signup() async =>
      await requestSignup(state).catchError((error) => throw error);
}
