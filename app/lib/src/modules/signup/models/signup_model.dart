class SignupModel {
  final String email;
  final String id;
  final String nickname;
  final String password;
  final String passwordValid;

  SignupModel({
    required this.email,
    required this.id,
    required this.nickname,
    required this.password,
    required this.passwordValid,
  });

  Map<String, dynamic> toJson() => {
        "email": email,
        "id": id,
        "nickname": nickname,
        "password": password,
      };
}
