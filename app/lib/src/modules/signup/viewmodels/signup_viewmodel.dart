import 'package:app/src/modules/signup/models/signup_model.dart';
import 'package:app/src/modules/signup/services/signup_service.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupViewModel extends StateNotifier<SignupModel> {
  SignupViewModel()
      : super(SignupModel(id: '', password: '', email: '', nickname: ''));

  void setId(String id) => state = SignupModel(
      email: state.email,
      id: id,
      nickname: state.nickname,
      password: state.password);

  void setPasswrod(String password) => state = SignupModel(
      email: state.email,
      id: state.id,
      nickname: state.nickname,
      password: password);

  void setEmail(String email) => state = SignupModel(
      email: email,
      id: state.id,
      nickname: state.nickname,
      password: state.password);

  void setNickname(String nickname) => state = SignupModel(
      email: state.email,
      id: state.id,
      nickname: nickname,
      password: state.password);

  Future<void> signup() async =>
      await requestSignup(state).catchError((error) => throw error);
}
