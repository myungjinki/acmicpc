function solution(new_id) {
  // 1�ܰ� new_id�� ��� �빮�ڸ� �����Ǵ� �ҹ��ڷ� ġȯ�մϴ�.
  new_id = new_id.toLowerCase();
  // 2�ܰ� new_id���� ���ĺ� �ҹ���, ����, ����(-), ����(_), ��ħǥ(.)�� ������ ��� ���ڸ� �����մϴ�.
  new_id = new_id.replace(/[^\w-._]+/g, "");
  // 3�ܰ� new_id���� ��ħǥ(.)�� 2�� �̻� ���ӵ� �κ��� �ϳ��� ��ħǥ(.)�� ġȯ�մϴ�.
  new_id = new_id.replace(/\.+/g, ".");
  // 4�ܰ� new_id���� ��ħǥ(.)�� ó���̳� ���� ��ġ�Ѵٸ� �����մϴ�.
  new_id = new_id.replace(/^\./g, "");
  new_id = new_id.replace(/\.$/g, "");
  // 5�ܰ� new_id�� �� ���ڿ��̶��, new_id�� "a"�� �����մϴ�.
  if (new_id == "") new_id = "a";
  // 6�ܰ� new_id�� ���̰� 16�� �̻��̸�, new_id�� ù 15���� ���ڸ� ������ ������ ���ڵ��� ��� �����մϴ�.
  // ���� ���� �� ��ħǥ(.)�� new_id�� ���� ��ġ�Ѵٸ� ���� ��ġ�� ��ħǥ(.) ���ڸ� �����մϴ�.
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/g, "");
  // 7�ܰ� new_id�� ���̰� 2�� ���϶��, new_id�� ������ ���ڸ� new_id�� ���̰� 3�� �� ������ �ݺ��ؼ� ���� ���Դϴ�.
  while (new_id.length < 3) new_id = new_id + new_id.charAt(new_id.length - 1);

  return new_id;
}
