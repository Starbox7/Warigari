import 'package:dio/dio.dart';
import '../../common/utils/url.dart';
import 'package:app/src/modules/signup/models/signup_model.dart';

Future<void> requestSignup(SignupModel formData) async => await Dio()
    .post(signupUrl, data: formData.toJson())
    .catchError((error) => throw error);
