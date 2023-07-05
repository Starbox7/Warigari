import 'package:app/src/modules/common/utils/url.dart';
import 'package:app/src/modules/signin/models/signin_model.dart';
import 'package:dio/dio.dart';

Future<void> requestSignin(SigninModel formData) async => await Dio()
    .post(signinUrl, data: formData.toJson())
    .catchError((error) => throw error);
