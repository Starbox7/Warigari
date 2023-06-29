class SignupModel {
  final String email;
  final String id;
  final String nickname;
  final String password;

  SignupModel(
      {required this.email,
      required this.id,
      required this.nickname,
      required this.password});

  Map<String, dynamic> toJson() => {
        "email": email,
        "id": id,
        "nickname": nickname,
        "password": password,
      };
}
