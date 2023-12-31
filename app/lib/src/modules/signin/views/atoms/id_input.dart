import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/input.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class IdInput extends HookConsumerWidget {
  const IdInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signinNotifier = ref.watch(signinProvider.notifier);
    Color grey = Theme.of(context).colorScheme.shadow;
    return Container(
      width: vw(context, 70),
      decoration: BoxDecoration(
        color: grey,
        borderRadius: BorderRadius.circular(rem(0.5)),
      ),
      padding: EdgeInsets.symmetric(horizontal: rem(2)),
      child: Input(
        hint: '아이디',
        init: '',
        obscureText: false,
        onChangeText: (id) => signinNotifier.setId(id),
      ),
    );
  }
}
