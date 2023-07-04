class SigninModel {
  String id;
  String password;

  SigninModel({required this.id, required this.password});

  Map<String, dynamic> toJson() => {
        "id": id,
        "password": password,
      };
}
